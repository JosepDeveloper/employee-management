const columns = [
  { name: "NOMBRE", uid: "name" },
  { name: 'PUESTO', uid: 'position' },
  { name: 'FECHA DE INGRESO', uid: 'date' },
  { name: "ACCIONES", uid: "actions" }
]

const users = [
  {
    id: 1,
    name: "Jose Oviedo",
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "Isaac Leon",
    cv: 'curriculo.pdf',
    position: 'Kike Sabe C++',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 3,
    name: "Javier Perez",
    cv: 'curriculo.pdf',
    position: 'TodoCode lo tiene Loco',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    name: "Bermys Santana",
    cv: 'curriculo.pdf',
    position: 'Depende de un hilo en Lenguaje',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 5,
    name: "Kristen Copper",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
  {
    id: 6,
    name: "Tony Reichert",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: 7,
    name: "Zoey Lang",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: 8,
    name: "Jane Fisher",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 9,
    name: "William Howard",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: 10,
    name: "Kristen Copper",
    cv: 'curriculo.pdf',
    position: 'Programador Jr.',
    date: new Date().toLocaleString(),
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  }
]

export { columns, users }
