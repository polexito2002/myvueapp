export default function useAuth() {

    const user = useState('aut-user', () => null)
    const errorBag = useState('auth-error-bag', ()=>({

        email: "",
        password: "",
        password_confirmation: "",
        name: ""
    }) )


    const {api, csrf} = useAxios()

function me() {
    api.get("api/me").then(({data}) => {
        console.log("data", data)
    })
}
 

    function login(useForm) {
        csrf().then(() => {

            api.post("/login",useForm).then(({data}) => {
                console.log("data",data)
            }).catch(err => {
                console.log("err", err.response.data)
            })
        })
    }


    function logout() {

    }


    function register(useForm) {

        csrf().then(() => {

            api.post("/register",useForm).then(({data}) => {
                console.log("data",data)
            }).catch(err => {
                console.log("err", err.response.data)
            })
        })

    }


    return {login, logout, register, errorBag, user}

}