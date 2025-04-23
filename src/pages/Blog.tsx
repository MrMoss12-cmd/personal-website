import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

const Blog: FC = () => {
  // Get unique tags from all posts
  const allTags = ['All', ...new Set(
    posts.flatMap(post => post.tags)
  )]
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredPosts = activeFilter === 'All'
    ? posts
    : posts.filter(post => 
        post.tags.includes(activeFilter)
      )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-3 text-center">Blog</h1>
      <p className="text-sm text-gray-600 mb-12 text-center">Blogs by category</p>
      
      {/* Tag filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === tag
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
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
              
              <h2 className="text-xl font-bold mb-2">
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
              <div className="flex items-center text-sm text-gray-500">
                <time>{post.date}</time>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <div className="text-center text-gray-400 mt-12">
          No blog posts found in this category.
        </div>
      )}
    </div>
  )
}

export default Blog