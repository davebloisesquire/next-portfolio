import Head from "next/head"
const PageNotFound = () => {
    return (
        <div>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <h1 className="text-7xl font-bold">404</h1>
            <h2>Sorry dawg...</h2>
        </div>
    )
}

export default PageNotFound