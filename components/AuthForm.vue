<template>
  
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <Heading as="h2">
         <span v-if="props.formType == 'signin'">
          Sign in to your account
         </span>
         <span  v-else>
          Create a new account
         </span>
        </Heading>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
         

            <FormGroup v-if="props.formType == 'signup'"  
                        label="Full name"  
                        name="name" type="text" 
                        autocomplete="name" 
                        required labelFor="name" 
                        labelClass="block text-sm font-medium leading-6 text-gray-900"
                        inputClass="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
            <FormGroup label="Email address"  
                        name="email" type="email" 
                        autocomplete="email" 
                        required labelFor="email" 
                        labelClass="block text-sm font-medium leading-6 text-gray-900"
                        inputClass="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />

            
            <div class="my-2">
            <FormGroup label="Password"  
                        name="password" type="password" 
                        autocomplete="current-password" 
                        required labelFor="password"
                        />
         
              <div class="text-sm text-end" v-if="props.formType == 'signin'">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
         
            <div>
            <Button type=submit>
              <span v-if="props.formType == 'signin' " >
              Sign In
              </span>
              <span v-else>
                Sigup
              </span>
              </Button>
          </div>
        </form>
  
      </div>
    </div>
  </template>


  <script setup>

const props = defineProps({
formType: {
  type: String,
  default: 'signin',
  validator: prop => ['signin','signup'].includes(prop)
}
})
  </script>
  