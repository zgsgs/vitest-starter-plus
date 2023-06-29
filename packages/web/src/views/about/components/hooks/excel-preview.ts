import { registerAllModules } from 'handsontable/registry'
import { excelData } from './excel-preview.data'

// register Handsontable's modules
registerAllModules()

export function useExcelPreview() {
  const hotSettings = reactive({
    data: excelData,
    colHeaders: true,
    width: 'auto',
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
  })

  return {
    hotSettings,
  }
}
