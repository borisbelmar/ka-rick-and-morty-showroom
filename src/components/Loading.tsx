export default function Loading () {
  return (
    <div className="text-center py-32">
      <svg className="animate-spin h-6 w-6 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042.
        135 5.824 3.5 7.75l2.5-2.459zM20 12a8 8 0 01-7.75 7.996L10.5
        17.75A5.969 5.969 0 0012 18c3.042 0 5.824-1.35 7.75-3.5l-2.5-2.5zm-2
        -5.291A7.962 7.962 0 0120 12h4c0-6.627-5.373-12-12-12v4z"/>
      </svg>
    </div>
  )
}