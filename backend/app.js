const express = require('express');


const PORT = 5000;
const app = express();
const ideas = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto earum eos inventore iure labore laboriosam maiores nam.',
        tag: 'Software',
        username: 'software22',
        date: '2022-01-02'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto earum eos inventore iure labore laboriosam maiores nam.',
        tag: 'Finances',
        username: 'financial_officer1',
        date: '2022-02-21'
    },
    {
        id: 3,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto earum eos inventore iure labore laboriosam maiores nam.',
        tag: 'Marketing',
        username: 'marketing_pro22',
        date: '2021-03-02'
    }
];
app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

app.get('/api/ideas', (req, res) => {
    res.json({success: true, data: ideas});
});

app.get('/api/ideas/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if(!idea) {
        return res.status(404).json({ success: false, error: 'No such idea' });
    }
    res.json({success: true, data: idea});
});

app.listen(5000, () => console.log(`Server started on port ${PORT}`));