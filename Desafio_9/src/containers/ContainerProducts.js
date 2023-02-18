import knex from 'knex'

class ContainerProducts {
    
    constructor(config, tabla) {
        this.knexConnection = knex(config)
        this.tabla = tabla
    }


   async createProd(obj){
    try{
        await this.knexConnection(this.tabla).insert(obj)
        //return((this.knexConnection).from(this.tabla).select('*'))
    }catch (error) {
        console.log(error);
    } finally {
        knexConnection.destroy();
    }
   }

    async updateById(id, obj){
        try{
            await (this.knexConnection).from(this.tabla).where('id', id).update({ ...obj })
            return((this.knexConnection).from(this.tabla).select('*'))

        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }
    }

    async getById(id){
        try{
            return (this.knexConnection).from(this.tabla).select('*').where('id', id)
            
        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }

    }

    async getAll(){
        try{
            return ((this.knexConnection).from(this.tabla).select('*'))
        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }
        
    }

    async deleteById(id){
        try{
            await this.knexConnection.from(this.tabla).where('id', id).del()
            return((this.knexConnection).from(this.tabla).select('*'))
        }catch(error){
            console.log(error)
        }finally {
            knexConnection.destroy(); 
        }
    }

    async deleteAll(){
        try{
            await this.knexConnection.from(this.tabla).del()
        }catch(error){
            console.log(error)
        }
    }
}

export default ContainerProducts