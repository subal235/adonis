// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";

export default class SignUpController {

    public async index({request}:HttpContext){
        return request.all()
    }
}
