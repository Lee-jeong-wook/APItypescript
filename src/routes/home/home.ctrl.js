// const Question = require('../../model/Question');
const Item = require('../../model/Item')

const process = {
    item: async (req, res) =>{
        console.log(req.body)
        const item = new Item(req.body);
        console.log(item);
        const resData = await item.getItem();
        console.log(resData);
        return res.json({text : resData});
    }
}

module.exports= {
    process
};