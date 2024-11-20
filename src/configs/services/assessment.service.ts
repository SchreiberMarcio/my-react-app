/* eslint-disable @typescript-eslint/no-explicit-any */


export function getAssessments () {
    try {
        const response = []

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