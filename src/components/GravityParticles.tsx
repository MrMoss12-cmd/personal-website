import { FC, useEffect, useRef } from 'react';

const GravityParticles: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // Ahora no necesitas la verificación if (!ctx) return; pero es buena práctica mantenerla
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Vector class
    class Vector {
      x: number;
      y: number;

      constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
      }

      static add(a: Vector, b: Vector): Vector {
        return new Vector(a.x + b.x, a.y + b.y);
      }

      static sub(a: Vector, b: Vector): Vector {
        return new Vector(a.x - b.x, a.y - b.y);
      }

      static scale(v: Vector, s: number): Vector {
        return v.clone().scale(s);
      }

      static random(): Vector {
        return new Vector(
          Math.random() * 2 - 1,
          Math.random() * 2 - 1
        );
      }

      set(x: number | Vector, y?: number): Vector {
        if (typeof x === 'object') {
          y = x.y;
          x = x.x;
        }
        this.x = x || 0;
        this.y = y || 0;
        return this;
      }

      add(v: Vector): Vector {
        this.x += v.x;
        this.y += v.y;
        return this;
      }

      sub(v: Vector): Vector {
        this.x -= v.x;
        this.y -= v.y;
        return this;
      }

      scale(s: number): Vector {
        this.x *= s;
        this.y *= s;
        return this;
      }

      length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }

      normalize(): Vector {
        const m = Math.sqrt(this.x * this.x + this.y * this.y);
        if (m) {
          this.x /= m;
          this.y /= m;
        }
        return this;
      }

      distanceTo(v: Vector): number {
        const dx = v.x - this.x;
        const dy = v.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
      }

      clone(): Vector {
        return new Vector(this.x, this.y);
      }
    }

    // GravityPoint class
    class GravityPoint extends Vector {
      radius: number;
      currentRadius: number;
      gravity: number;
      isMouseOver: boolean;
      dragging: boolean;
      destroyed: boolean;
      _targets: { particles: Particle[], gravities: GravityPoint[] };
      _speed: Vector;
      _easeRadius: number;
      _dragDistance: Vector | null;
      _collapsing: boolean;

      static RADIUS_LIMIT = 65;
      static interferenceToPoint = true;

      constructor(x: number, y: number, radius: number, targets: { particles: Particle[], gravities: GravityPoint[] }) {
        super(x, y);
        this.radius = radius;
        this.currentRadius = radius * 0.5;
        this._targets = targets;
        this._speed = new Vector();
        this.gravity = 0.05;
        this.isMouseOver = false;
        this.dragging = false;
        this.destroyed = false;
        this._easeRadius = 0;
        this._dragDistance = null;
        this._collapsing = false;
      }

      hitTest(p: Vector): boolean {
        return this.distanceTo(p) < this.radius;
      }

      startDrag(dragStartPoint: Vector): void {
        this._dragDistance = Vector.sub(dragStartPoint, this);
        this.dragging = true;
      }

      drag(dragToPoint: Vector): void {
        this.x = dragToPoint.x - (this._dragDistance?.x || 0);
        this.y = dragToPoint.y - (this._dragDistance?.y || 0);
      }

      endDrag(): void {
        this._dragDistance = null;
        this.dragging = false;
      }

      addSpeed(d: Vector): void {
        this._speed = this._speed.add(d);
      }

      collapse(): void {
        this.currentRadius *= 1.75;
        this._collapsing = true;
      }

      render(ctx: CanvasRenderingContext2D): void {
        if (this.destroyed) return;

        const particles = this._targets.particles;
        for (let i = 0; i < particles.length; i++) {
          particles[i].addSpeed(Vector.sub(this, particles[i]).normalize().scale(this.gravity));
        }

        this._easeRadius = (this._easeRadius + (this.radius - this.currentRadius) * 0.07) * 0.95;
        this.currentRadius += this._easeRadius;
        if (this.currentRadius < 0) this.currentRadius = 0;

        if (this._collapsing) {
          this.radius *= 0.75;
          if (this.currentRadius < 1) this.destroyed = true;
          this._draw(ctx);
          return;
        }

        const gravities = this._targets.gravities;
        for (let i = 0; i < gravities.length; i++) {
          const g = gravities[i];
          if (g === this || g.destroyed) continue;

          if ((this.currentRadius >= g.radius || this.dragging) &&
              this.distanceTo(g) < (this.currentRadius + g.radius) * 0.85) {
            g.destroyed = true;
            this.gravity += g.gravity;
            this.currentRadius += g.radius * 0.2;
          }
        }

        if (GravityPoint.interferenceToPoint && !this.dragging) {
          this.add(this._speed);
        }

        this._draw(ctx);
      }

      _draw(ctx: CanvasRenderingContext2D): void {
        if (this.destroyed) return;

        const grd = ctx.createRadialGradient(this.x, this.y, this.currentRadius, this.x, this.y, this.currentRadius * 5);
        grd.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius * 5, 0, Math.PI * 2, false);
        ctx.fillStyle = grd;
        ctx.fill();

        const r = Math.random() * this.currentRadius * 0.7 + this.currentRadius * 0.3;
        const rgb = [
          ~~(Math.random() * 100) + 155,
          ~~(Math.random() * 100) + 155,
          ~~(Math.random() * 100) + 155
        ];
        const rgba = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + (Math.random() * 0.1 + 0.2) + ')';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2, false);
        ctx.fillStyle = rgba;
        ctx.fill();
      }
    }

    // Particle class
    class Particle extends Vector {
      radius: number;
      _latest: Vector;
      _speed: Vector;
      _gravities: GravityPoint[];
      _color: string;

      constructor(x: number, y: number, radius: number, gravities: GravityPoint[]) {
        super(x, y);
        this.radius = radius;
        this._latest = new Vector();
        this._speed = new Vector();
        this._gravities = gravities;
        
        // Asignar un color aleatorio a cada partícula
        const hue = Math.floor(Math.random() * 360);
        this._color = `hsl(${hue}, 80%, 80%)`;
      }

      addSpeed(d: Vector): void {
        this._speed.add(d);
      }

      update(): void {
        this._latest.set(this);
        this.add(this._speed);
        
        // Añadir un pequeño movimiento aleatorio para simular un comportamiento más natural
        this._speed.add(new Vector(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        ));
      }

      render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this._color;
        ctx.fill();
      }
    }

    // Initialize
    const MAX_PARTICLES = 100;
    const particles: Particle[] = [];
    const gravities: GravityPoint[] = [];
    let mousePoint = new Vector();
    let isMouseDown = false;

    // Create particles
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const particle = new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1.5 + 0.5,
        gravities
      );
      
      // Añadir velocidad inicial aleatoria para que las partículas se muevan
      particle._speed.set(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      
      particles.push(particle);
    }

    // Mouse events
    canvas.addEventListener('mousedown', function(e) {
      mousePoint.set(e.clientX, e.clientY);
      isMouseDown = true;
      
      const gravity = new GravityPoint(
        e.clientX, e.clientY, 
        40, // Aumentado el radio para mayor visibilidad
        { particles, gravities }
      );
      // Aumentamos la gravedad para un efecto más fuerte
      gravity.gravity = 0.08;
      gravities.push(gravity);
    });

    canvas.addEventListener('mousemove', function(e) {
      mousePoint.set(e.clientX, e.clientY);
    });

    canvas.addEventListener('mouseup', function(e) {
      isMouseDown = false;
    });

    // Touch events for mobile
    canvas.addEventListener('touchstart', function(e) {
      e.preventDefault();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mousePoint.set(touch.clientX, touch.clientY);
        isMouseDown = true;
        
        const gravity = new GravityPoint(
          touch.clientX, touch.clientY, 
          40,
          { particles, gravities }
        );
        gravity.gravity = 0.08;
        gravities.push(gravity);
      }
    });

    canvas.addEventListener('touchmove', function(e) {
      e.preventDefault();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mousePoint.set(touch.clientX, touch.clientY);
      }
    });

    canvas.addEventListener('touchend', function(e) {
      e.preventDefault();
      isMouseDown = false;
    });

    // Animation loop
    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Update and render particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        
        // Añadir rebote en los bordes
        if (particles[i].x < 0 || particles[i].x > canvas.width) {
          particles[i]._speed.x *= -0.8;
        }
        if (particles[i].y < 0 || particles[i].y > canvas.height) {
          particles[i]._speed.y *= -0.8;
        }
        
        // Aplicar fricción para que no se aceleren infinitamente
        particles[i]._speed.scale(0.97);
        
        particles[i].render(ctx);
      }
    
      // Update and render gravity points
      for (let i = 0; i < gravities.length; i++) {
        gravities[i].render(ctx);
      }
    
      // Remove destroyed gravity points
      for (let i = gravities.length - 1; i >= 0; i--) {
        if (gravities[i].destroyed) {
          gravities.splice(i, 1);
        }
      }
    
      requestAnimationFrame(loop);
    }

    loop();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          zIndex: 0,
          pointerEvents: 'auto' 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          padding: '5px 15px', 
          color: '#eee', 
          fontSize: '13px', 
          backgroundColor: 'rgba(0, 0, 0, .5)',
          zIndex: 1
        }}
      >
      </div>
    </>
  );
};

export default GravityParticles;