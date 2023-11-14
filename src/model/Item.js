class Item{
    constructor(body){
        this.body = body;
    }

    async getItem(){
        const client = this.body;
        console.log(client);
        const text = `${client.text} 님의 입장`;
        return text;
    }
}

module.exports = Item