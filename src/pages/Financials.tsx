import { DollarSign, TrendingUp, TrendingDown, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Financials = () => {
  const budgetData = [
    {
      category: "Water Conservation",
      allocated: 2500000,
      spent: 2100000,
      remaining: 400000,
      percentage: 84
    },
    {
      category: "Soil Management",
      allocated: 1800000,
      spent: 1350000,
      remaining: 450000,
      percentage: 75
    },
    {
      category: "Infrastructure",
      allocated: 3200000,
      spent: 2400000,
      remaining: 800000,
      percentage: 75
    },
    {
      category: "Training & Capacity",
      allocated: 800000,
      spent: 650000,
      remaining: 150000,
      percentage: 81
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Financial Management</h1>
          <p className="text-muted-foreground">Budget allocation and expenditure tracking</p>
        </div>
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          FY 2023-24
        </Badge>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹83.0 Lakhs</div>
            <p className="text-xs text-muted-foreground">Allocated for watershed projects</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenditure</CardTitle>
            <TrendingUp className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹65.0 Lakhs</div>
            <p className="text-xs text-muted-foreground">78% of allocated budget</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <TrendingDown className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹18.0 Lakhs</div>
            <p className="text-xs text-muted-foreground">22% remaining budget</p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Breakdown */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Budget Allocation by Category</CardTitle>
          <CardDescription>Detailed breakdown of financial allocation and utilization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {budgetData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{item.category}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {item.percentage}% utilized
                    </Badge>
                    {item.percentage > 80 && (
                      <AlertCircle className="h-4 w-4 text-accent" />
                    )}
                  </div>
                </div>
                <div className="bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Allocated: {formatCurrency(item.allocated)}</span>
                  <span>Spent: {formatCurrency(item.spent)}</span>
                  <span>Remaining: {formatCurrency(item.remaining)}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Financial Transactions</CardTitle>
          <CardDescription>Latest expenditures and fund allocations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "2024-01-15", description: "Water storage tank construction", amount: -150000, category: "Infrastructure" },
              { date: "2024-01-12", description: "Soil testing equipment", amount: -45000, category: "Soil Management" },
              { date: "2024-01-10", description: "Farmer training program", amount: -25000, category: "Training & Capacity" },
              { date: "2024-01-08", description: "Grant disbursement", amount: 500000, category: "Funding" }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium text-sm">{transaction.description}</div>
                  <div className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</div>
                </div>
                <div className={`font-medium ${transaction.amount > 0 ? 'text-secondary' : 'text-primary'}`}>
                  {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Financials;