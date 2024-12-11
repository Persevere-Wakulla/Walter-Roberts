import React from 'react'
import{ Link } from 'react-router-dom'

const BooksTable = ({ books })=> {
    return (
        <table className="w-full border-separated border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:600">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`}>
                  <h3 className="text-2xl">ℹ️ Info</h3>
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                  <h3 className="text-2xl">✍️ Edit</h3>
                  </Link>
                  <Link to={`/books/delete/${book._id}`}>
                  <h3 className="text-2xl">🗑️ Delete</h3>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default BooksTable