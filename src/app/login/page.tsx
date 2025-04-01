import Image from 'next/image'; // Importando o componente Image

export default function LoginPage() {
    return (
        <main className="flex flex-col h-screen">
         
            <header className="h-15 bg-green-900"/>
            <div className="flex items-center justify-between flex-1 p-10">
                <div className="flex-shrink-0">
                    <Image 
                        src="/imagens/Logo.jfif"  // Caminho correto da imagem
                        alt="Evernote Logo" 
                        width={500} 
                        height={500} 
                        className="flex justify-center ml-20 mt-0 mb-10"
                    />
                </div>

                <div className="flex flex-col justify-start items-end mr-40">
                    <div className="text-center mb-10 mr-10">
                        <h2 className="text-4xl font-bold text-green-900">
                            To enter
                        </h2>
                        <h3 className="text-2xl font-bold">
                            To continue with your Evernote account.
                        </h3>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="mb-5">
                            <h3 className="text-2xl mb-2">
                                Please insert your email address
                            </h3>
                            <input 
                                type="text" 
                                placeholder="Email" 
                                className="p-3 pr-85 m-2 mb-10 border border-green-900 rounded-full"
                            />
                        </div>

                        <div className="mb-5">
                            <h3 className="text-2xl mb-2">
                                Please insert your user name
                            </h3>
                            <input 
                                type="password" 
                                placeholder="User Name" 
                                className="p-3 pr-85 m-2 border border-green-900 rounded-full"
                            />
                        </div>
                    </div>
                    
                    <h3 className="pt-6 mr-80">
                        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                    </h3>
                </div>
            </div>

            <footer className="h-15 bg-green-900"/>
                            
        </main>
    );
}
