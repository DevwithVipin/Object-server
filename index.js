const express = require("express");
const app = express();
const PORT = 3090;

const data = {
  loans: {
    disbursed: "₹23,842.32",
    repayments: "₹3,245",
    outstanding: "₹34,233",
    arrears: "₹32,453",
  },
  QuickAnalytics: {
    company: {
      clients: 10,
      branches: 1,
      employees: 20,
    },
    TotalIncome: {
      Weekly: {
        income: {
          hike: "2,345",
          total: "75,643",
        },
        newusers: {
          hike: "2,345",
          total: "75,643",
        },
        expenses: {
          hike: "2,345",
          total: "75,643",
        },
        totalcollection: {
          hike: "2,345",
          total: "75,643",
        },
      },
      Today: {
        income: {
          hike: "2345",
          total: "75643",
        },
        newusers: {
          hike: "2345",
          total: "75643",
        },
        expenses: {
          hike: "2345",
          total: "75643",
        },

        totalcollection: {
          hike: "2345",
          total: "75643",
        },
      },
      Monthly: {
        income: {
          hike: "2345",
          total: "75643",
        },
        newusers: {
          hike: "2345",
          total: "75643",
        },
        expenses: {
          hike: "2345",
          total: "75643",
        },

        totalcollection: {
          hike: "2345",
          total: "75643",
        },
      },
    },
    Graphvalues: {
      Weekly: {
        Submitted:"55",
        Income:"15",
        Rent:"25",
        Download:"5"
      },
      Today: {
        Submitted:"35",
        Income:"25",
        Rent:"25",
        Download:"15"
      },
      Monthly: {
       Submitted:"25",
       Income:"45",
       Rent:"15",
       Download:"15"
      },
    },
  },
  LatestCustomers: [
    {
      id: 1,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 2,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 3,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 4,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 5,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 6,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 7,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 10,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 8,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
    {
      id: 9,
      FullName: "Rajendra Prajapat",
      MobileNumber: "9849583848",
      CreditScore: "890",
    },
  ],
  OverviewLoanRequests: {
    Today: {
      OptionsChart: {
        Submitted: "50",
        Defective: "10",
        UnderVerification: "10",
        Process: "30",
      },
      OptionsValues: {
        Submitted: "50+",
        Defective: "10+",
        UnderVerification: "50+",
        Process: "30+",
      },
    },
    Weekly: {
      OptionsChart: {
        Submitted: "70",
        Defective: "10",
        UnderVerification: "10",
        Process: "10",
      },
      OptionsValues: {
        Submitted: "50+",
        Defective: "10+",
        UnderVerification: "5+",
        Process: "150+",
      },
    },
    Monthly: {
      OptionsChart: {
        Submitted: "40",
        Defective: "10",
        UnderVerification: "10",
        Process: "40",
      },
      OptionsValues: {
        Submitted: "500+",
        Defective: "10+",
        UnderVerification: "5+",
        Process: "158+",
      },
    },
  },
  LoginFeeReceived: {
    Today: {
      "12_1": 30,
      3: 30,
      6: 40,
      9: 50,
      "12_2": 40,
      15: 50,
      18: 60,
      21: 70,
    },
    Weekly: {
      Sunday: 20,
      Monday: 50,
      Tuesday: 80,
      Wednesday: 40,
      Thursday: 70,
      Friday: 60,
      Saturday: 90,
    },
    Monthly: {
      January: 20,
      February: 50,
      March: 80,
      April: 40,
      May: 70,
      June: 60,
      July: 90,
      August: 100,
      September: 10,
      October: 20,
      November: 30,
    },
    TotalLoanDisbursed: 23456,
  },
  PendingCollections: [
    {
      NO: 1,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 2,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 3,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 4,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 1,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 5,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 1,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 6,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
    {
      NO: 7,
      Name: "Rajendra Prajapat",
      LoanID: 123,
      Amount: 5000,
      DueDate: "03/12/2024",
    },
  ],
  NewLoanRequest: [
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
    {
      FirstName: "Rajnish",
      LastName: "Kumar",
      LoanID: "234",
      ProcessedOn: "02/02/2023",
      Status: "Approved",
      LoanProgress: "40",
    },
  ],
};

app.get("/stats/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
