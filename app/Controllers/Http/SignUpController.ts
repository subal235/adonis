// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone"
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class SignUpController {

    public async index({ request }: HttpContext) {
        const req = await request.validate({
            //    schemall for all this fields but we need custom messages also
            schema: schema.create({
                name: schema.string(),
                email: schema.string({}, [
                    rules.email()

                ]),
                password: schema.string({}, [
                    rules.confirmed()
                ])

            }),
            messages : {
                'name.required' : ' Name is required to sign up',
                'email.required' : ' Email is required to sign up',
                'password.required' : ' Password is required to sign up',
                
            }
        })
        console.log(req)
        return request.all()
    }
}
