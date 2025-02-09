interface Attribute {
  Value: string
  Id: string
}

interface Cell {
  Value: string
  Attributes?: Attribute[]
}

interface Row {
  RowType: string
  Title?: string
  Cells?: Cell[]
  Rows?: Row[]
}

export interface Report {
  ReportID: string
  ReportName: string
  ReportType: string
  ReportTitles: string[]
  ReportDate: string
  UpdatedDateUTC: string
  Rows: Row[]
}

export type BalanceSheet = {
  Reports: Report[],
  Status: string
}
