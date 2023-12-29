export default function Custom404() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-9xl mb-4">404 Not Found</h1>
                <p>Your visited page not found. You may go homepage.</p>
                <button className="w-48 h-16 bg-red-700 mt-8 text-white rounded-sm"><a href="/">Back to homepage</a></button>
            </div>
        </div>
    )
}
