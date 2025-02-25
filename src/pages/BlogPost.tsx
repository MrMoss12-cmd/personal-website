import { FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'

const BlogPost: FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)

  if (!post) {
    navigate('/blog')
    return null
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article>
        {/* Header */}
        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500">
            <time>{post.date}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Featured Image */}
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          {/* Add your blog post content here */}
          <div className="text-gray-700 leading-relaxed">
            <p>Your blog post content goes here...</p>
          </div>
        </div>
      </article>

      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        className="mt-12 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        ← Back to Blog
      </button>
    </div>
  )
}

export default BlogPost