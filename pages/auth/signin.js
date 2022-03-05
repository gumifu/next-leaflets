import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Header from "../../components/Header";

export default function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen -mt-56 py-2  px-14 bg-gray-100">
        <img src="/logo-main.svg" className="w-60"/>

        <p className="font-xs italic mt-5">leafletsへようこそ!</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={() => SignIntoProvider(provider.id,{callbackUrl:"/"})}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

