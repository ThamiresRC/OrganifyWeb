
export default function LoginPage() {
    
    return (
        <main>
            <header className="h-15 bg-green-900"/>

                <div className="flex justify-end items-center mt-50 mr-45">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-green-900">
                            To enter
                        </h2>
                        <h3 className="text-2xl font-bold">
                            To continue with your Evernote account.
                        </h3>
                    </div>
                </div>

                <div className="flex justify-end items-center h-full pr-6 mt-25 mr-25">
                    <div className="">
                        <h3 className="text-2xl mb-5">
                            Please insert your email adress
                        </h3>
                        <input type="text" placeholder="Email" className="p-3 pr-85 m-2 mb-10 border border-green-900 rounded-full"/>
                    
                        <h3 className="text-2xl mb-5">
                            Please insert your user name
                        </h3>
                        <input type="password" placeholder="User Name" className="p-3 pr-85 m-2 border border-green-900 rounded-full"/>
                    </div>
                </div>
                <h3 className="flex justify-end h-full pt-6 mr-110">
                    Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </h3>
                    
            <footer className="h-15 mt-55 bg-green-900"/>
        </main>
   
    );
  }