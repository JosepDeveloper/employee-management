import { Document, Text, Page, StyleSheet, View } from '@react-pdf/renderer'
import { getEmployees } from '../services/rootLocalStorage'

const styles = StyleSheet.create({
  centerText: {
    textAlign: 'center'
  },
  fontSmall: {
    fontSize: '15pt'
  },
  centerContent: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  }
})

export const PDF = () => {
  const employees = getEmployees()

  return (
    <Document>
      <Page style={[styles.centerContent, styles.fontSmall]}>
        <Text style={[styles.centerText]}>Tabla de Empleados</Text>
        <View style={styles.centerText}>
          {
            employees.map((employee, index) => {
              return (
                <Text key={employee.id}>{index + 1} - {employee.name} - {employee.position} - {employee.date}</Text>
              )
            })
          }
        </View>
      </Page>
    </Document>
  )
}
