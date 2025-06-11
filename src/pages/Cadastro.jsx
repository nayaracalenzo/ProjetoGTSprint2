import {useState} from 'react'


const Cadastro = () => {
    const [firstname, setFirstname] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   async function handleCadastro (e) {
        e.preventDefault()
        try {
            const resposta = await axios.post("http://localhost:3000/v1/user/register", {
                firstname,
                surname,
                email,
                password
            })
        } catch (error) {
            
        }
        
    }
  return (
    <>
    <h1 className='font-bold text-center p-3 text-2xl'>Cadastro</h1>
    <form onSubmit={handleCadastro} className='flex flex-col gap-4 mx-auto w-full sm:w-[50%] md:w-[40%] lg:w-[30%] p-4'>
        <input type="text" placeholder='Nome' required value={firstname} className='border p-2 rounded' />
        <input type="text" placeholder='Último sobrenome' required value={surname} className='border p-2 rounded' />
        <input type="email" placeholder='Email' required value={email} className='border p-2 rounded' />
        <input type="password" placeholder='Senha' required value={password} className='border p-2 rounded' />
        <button type='submit' className='bg-pink-700 text-white p-2 rounded hover:bg-pink-700/80'>Cadastrar</button>
    </form>
    </>
  )
}

export default Cadastro