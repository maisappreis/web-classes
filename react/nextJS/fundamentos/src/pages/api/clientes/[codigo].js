

export default function handler(req, res) {
    const codigo = req.query.codigo;

    res.status(200).json({
        id: codigo,
        nome: `Maisa ${codigo}`,
        email: `maisa${codigo}@maisapp.com.br`
    })
}

// Rotorno no browser:

// http://localhost:3000/api/clientes/123

// {"id":"123","nome":"Maisa 123","email":"maisa123@maisapp.com.br"}