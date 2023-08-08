import fs from 'fs';

export class mesageManager{

    constructor(path){
        this.path = path
    }

    async reciveMesage (data){
        const mesage =data
        if (typeof(data)=="string"){
        await fs.promises.writeFile(this.path, JSON.stringify(mesage))}
        else{
            const newMesage = 
            `Title: ${mesage.title} Description: ${mesage.description} Price: ${mesage.price} Stock: ${mesage.stock} Category: ${mesage.category}`
            await fs.promises.writeFile(this.path, JSON.stringify(newMesage))
        }
    }
    async readMesage(){
        const data = await fs.promises.readFile(this.path, 'utf-8')
        return data
    }
    async deleteMesage(){
        await fs.promises.unlink(this.path)
    }
        
}