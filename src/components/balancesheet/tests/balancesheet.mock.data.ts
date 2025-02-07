const balanceSheetData = {
  Status: 'OK',
  Reports: [
    {
      ReportID: 'BalanceSheet',
      ReportName: 'Balance Sheet',
      ReportType: 'BalanceSheet',
      ReportTitles: ['Balance Sheet', 'Demo Org', 'As at 06 February 2025'],
      ReportDate: '06 February 2025',
      UpdatedDateUTC: '/Date(1738876013878)/',
      Fields: [],
      Rows: [
        {
          RowType: 'Header',
          Cells: [
            { Value: '' },
            { Value: '06 February 2025' },
            { Value: '07 February 2024' },
          ],
        },
        {
          RowType: 'Section',
          Title: 'Bank',
          Rows: [
            {
              RowType: 'Row',
              Cells: [
                {
                  Value: 'My Bank Account',
                  Attributes: [
                    {
                      Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '126.70',
                  Attributes: [
                    {
                      Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '99.60',
                  Attributes: [
                    {
                      Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
                      Id: 'account',
                    },
                  ],
                },
              ],
            },
            {
              RowType: 'Row',
              Cells: [
                {
                  Value: 'Sample Business',
                  Attributes: [
                    {
                      Value: '84110043-a296-4fb0-aa97-34a45a5d9fc5',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '92911.00',
                  Attributes: [
                    {
                      Value: '84110043-a296-4fb0-aa97-34a45a5d9fc5',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '92911.00',
                  Attributes: [
                    {
                      Value: '84110043-a296-4fb0-aa97-34a45a5d9fc5',
                      Id: 'account',
                    },
                  ],
                },
              ],
            },
            {
              RowType: 'Row',
              Cells: [
                {
                  Value: 'Sample Business 1',
                  Attributes: [
                    {
                      Value: '38c1c989-0b15-4203-854f-49682610d56a',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '11039.00',
                  Attributes: [
                    {
                      Value: '38c1c989-0b15-4203-854f-49682610d56a',
                      Id: 'account',
                    },
                  ],
                },
                {
                  Value: '11039.00',
                  Attributes: [
                    {
                      Value: '38c1c989-0b15-4203-854f-49682610d56a',
                      Id: 'account',
                    },
                  ],
                },
              ],
            },
            {
              RowType: 'SummaryRow',
              Cells: [
                { Value: 'Total Bank' },
                { Value: '104076.70' },
                { Value: '104049.60' },
              ],
            },
          ],
        },
      ],
    },
  ],
}


export default balanceSheetData