import {useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="flex justify-center text-tahiti min-h-screen items-center flex-col">
            <h1 className="text-red-500 font-bold text-3xl">Opps!</h1>
            <p className="py-2">Sorry, an unaxcepted error has onccured</p>
            <p className="text-4xl font-bold text-red-800">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage