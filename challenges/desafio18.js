db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, { ingredientes: { $push: "bacon" } },
);
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });