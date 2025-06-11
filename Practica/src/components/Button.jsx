export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded shadow hover:bg-gray-200"
    >
      {children}
    </button>
  )
}
