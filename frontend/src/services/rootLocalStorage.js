export const resetLocalStorageRoot = () => {
  const storage = localStorage

  if (storage.length === 0) {
    const data = [
      {
        id: 1,
        user: 'root',
        password: 'root'
      }
    ]
    storage.setItem('users', JSON.stringify(data))
    storage.setItem('sesion', JSON.stringify({
      state: false
    }))
    storage.setItem('employees', JSON.stringify([]))
    storage.setItem('positions', JSON.stringify([]))
  }
}

export const getUsers = () => {
  const storage = localStorage
  const data = storage.getItem('users')

  return JSON.parse(data)
}

export const deleteUser = (id) => {
  const storage = localStorage
  const users = JSON.parse(storage.getItem('users'))
  const result = users.filter(element => element.id !== id)

  storage.setItem('users', JSON.stringify(result))
}

export const setUsers = (data) => {
  const storage = localStorage
  const users = JSON.parse(storage.getItem('users'))
  const newUser = {
    ...data
  }

  if (users.length === 0) {
    newUser.id = 1
  } else {
    const id = users[users.length - 1].id + 1
    newUser.id = id
  }

  users.push(newUser)
  storage.setItem('users', JSON.stringify(users))
}

export const setSesion = (name) => {
  const storage = localStorage

  storage.setItem('sesion', JSON.stringify({
    state: true,
    name
  }))
}

export const redirectToLogin = () => {
  const storage = localStorage
  const data = JSON.parse(storage.getItem('sesion'))

  if (data === null || data.state === false) {
    return true
  }

  return false
}

export const getUser = () => {
  const storage = localStorage
  const data = JSON.parse(storage.getItem('sesion'))

  if (data === null) {
    location.href = `${location.href}login`
  }

  return data.name
}

export const resetSesion = () => {
  const storage = localStorage

  storage.setItem('sesion', JSON.stringify({
    state: false
  }))
}

export const getEmployees = () => {
  const storage = localStorage
  const data = JSON.parse(storage.getItem('employees'))

  return data
}

export const getPositions = () => {
  const storage = localStorage
  const data = JSON.parse(storage.getItem('positions'))

  return data
}

export const setPositions = (data) => {
  const storage = localStorage
  const positions = JSON.parse(storage.getItem('positions'))
  let position

  if (positions.length === 0) {
    position = {
      id: 1,
      ...data
    }
  } else {
    const id = positions[positions.length - 1].id + 1
    position = {
      id,
      ...data
    }
  }

  positions.push(position)
  storage.setItem('positions', JSON.stringify(positions))
}

export const deletePosition = id => {
  const storage = localStorage
  const positions = JSON.parse(storage.getItem('positions'))

  const result = positions.filter(element => {
    return element.id !== id
  })

  storage.setItem('positions', JSON.stringify(result))
}

export const addEmployeeElement = (data) => {
  const positions = getPositions()
  const storage = localStorage
  const employees = JSON.parse(storage.getItem('employees'))
  const position = positions[data.position - 1].position
  const name = `${data.primerNombre} ${data.segundoNombre} ${data.primerApellido} ${data.segundoApellido}`

  const employee = {
    name,
    position,
    date: data.date
  }

  if (employees.length === 0) {
    employee.id = 1
  } else {
    const id = employees[employees.length - 1].id + 1
    employee.id = id
  }

  employees.push(employee)
  console.log(employees)
  storage.setItem('employees', JSON.stringify(employees))
}

export const deleteEmployee = (id) => {
  const storage = localStorage
  const employees = JSON.parse(storage.getItem('employees'))

  const result = employees.filter(element => {
    return element.id !== id
  })

  storage.setItem('employees', JSON.stringify(result))
}
