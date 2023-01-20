// Consultas no banco de dados.

module.exports = {
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ?
            UNION ALL
            SELECT c.id FROM subcategories, categories c
                WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    `
}

// qnd é CaseSensitive precisa colocar entre aspas, como "parentId"
// o 'parentId' da categoria tem que ser exatamente igual ao ID da subcategoria.
// gerou de forma recursiva um especie de tabela temporária dentro da consulta.
// que vai me retornar o ID da propria categoria que eu passei como parâmetro. 

// a partir do pai, vai gerar o filho, e o filho dos filhos.