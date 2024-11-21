/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from "./api.service";


export async function getAssessments () {
    try {
        const response = await api.get("/assessments");
        console.log(response);

        return {
            ok:true,
            message:"Busca concluida com sucesso",
            data: response,
        }
    } catch (error: any) {
        return {
            ok:false,
            message:`Erro: ${error.message}`
        }
    }
}