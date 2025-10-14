import{r as e}from"./iframe-BiU2suBC.js";import{T as E,a as N,b as x,c as r,d as l,e as A,f as a,g as H}from"./table-C8pifwcw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DgWKjmuI.js";const{expect:s,userEvent:v,within:w}=__STORYBOOK_MODULE_TEST__,C=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}];function f(){return e.createElement(E,null,e.createElement(N,null,"A list of your recent invoices."),e.createElement(x,null,e.createElement(r,null,e.createElement(l,{className:"w-[100px]"},"Invoice"),e.createElement(l,null,"Status"),e.createElement(l,null,"Method"),e.createElement(l,{className:"text-right"},"Amount"))),e.createElement(A,null,C.map(t=>e.createElement(r,{key:t.invoice},e.createElement(a,{className:"font-medium"},t.invoice),e.createElement(a,null,t.paymentStatus),e.createElement(a,null,t.paymentMethod),e.createElement(a,{className:"text-right"},t.totalAmount)))),e.createElement(H,null,e.createElement(r,null,e.createElement(a,{colSpan:3},"Total"),e.createElement(a,{className:"text-right"},"$2,500.00"))))}const R={title:"ui/Table",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A responsive table component."}}},excludeStories:/.*Demo$/,render:()=>e.createElement(f,null)},u={},d={name:"when user clicks column header, should sort table data by that column",tags:["!dev","!autodocs"],render:()=>{const[t,c]=e.useState(null),[n,p]=e.useState("asc"),m=o=>{t===o?p(n==="asc"?"desc":"asc"):(c(o),p("asc"))},b=e.useMemo(()=>t?[...C].sort((o,y)=>{const i=o[t],T=y[t];if(t==="totalAmount"){const S=parseFloat(i.replace("$","")),h=parseFloat(T.replace("$",""));return n==="asc"?S-h:h-S}return n==="asc"?i.localeCompare(T):T.localeCompare(i)}):C,[t,n]);return e.createElement(E,null,e.createElement(N,null,"A list of your recent invoices."),e.createElement(x,null,e.createElement(r,null,e.createElement(l,{className:"w-[100px]"},e.createElement("button",{onClick:()=>m("invoice"),className:"font-medium"},"Invoice"," ",t==="invoice"&&(n==="asc"?"↑":"↓"))),e.createElement(l,null,e.createElement("button",{onClick:()=>m("paymentStatus"),className:"font-medium"},"Status"," ",t==="paymentStatus"&&(n==="asc"?"↑":"↓"))),e.createElement(l,null,"Method"),e.createElement(l,{className:"text-right"},e.createElement("button",{onClick:()=>m("totalAmount"),className:"font-medium"},"Amount"," ",t==="totalAmount"&&(n==="asc"?"↑":"↓"))))),e.createElement(A,null,b.map(o=>e.createElement(r,{key:o.invoice},e.createElement(a,{className:"font-medium"},o.invoice),e.createElement(a,null,o.paymentStatus),e.createElement(a,null,o.paymentMethod),e.createElement(a,{className:"text-right"},o.totalAmount)))),e.createElement(H,null,e.createElement(r,null,e.createElement(a,{colSpan:3},"Total"),e.createElement(a,{className:"text-right"},"$2,500.00"))))},play:async({canvasElement:t})=>{const c=w(t),n=c.getByRole("button",{name:/Invoice/i});await s(n).toBeInTheDocument(),await v.click(n),await s(n).toHaveTextContent("↑");const p=c.getAllByRole("cell");await s(p[0]).toHaveTextContent("INV001"),await v.click(n),await s(n).toHaveTextContent("↓");const m=c.getAllByRole("cell");await s(m[0]).toHaveTextContent("INV007");const b=c.getByRole("button",{name:/Amount/i});await v.click(b),await s(b).toHaveTextContent("↑");const y=c.getAllByRole("cell").find(i=>i.textContent?.includes("$"));await s(y).toHaveTextContent("$150.00")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{}",...u.parameters?.docs?.source},description:{story:"The default table with invoice data.",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "when user clicks column header, should sort table data by that column",
  tags: ["!dev", "!autodocs"],
  render: () => {
    const [sortKey, setSortKey] = React.useState<"invoice" | "paymentStatus" | "totalAmount" | null>(null);
    const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
    const handleSort = (key: "invoice" | "paymentStatus" | "totalAmount") => {
      if (sortKey === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortOrder("asc");
      }
    };
    const sortedInvoices = React.useMemo(() => {
      if (!sortKey) return invoices;
      return [...invoices].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (sortKey === "totalAmount") {
          const aNum = parseFloat(aVal.replace("$", ""));
          const bNum = parseFloat(bVal.replace("$", ""));
          return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
        }
        return sortOrder === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
    }, [sortKey, sortOrder]);
    return <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <button onClick={() => handleSort("invoice")} className="font-medium">
                Invoice{" "}
                {sortKey === "invoice" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </TableHead>
            <TableHead>
              <button onClick={() => handleSort("paymentStatus")} className="font-medium">
                Status{" "}
                {sortKey === "paymentStatus" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">
              <button onClick={() => handleSort("totalAmount")} className="font-medium">
                Amount{" "}
                {sortKey === "totalAmount" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedInvoices.map(invoice => <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>)}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🎯 목적: 테이블 컬럼 헤더 클릭 시 해당 컬럼으로 정렬되는지 확인

    // Invoice 컬럼으로 정렬
    const invoiceHeader = canvas.getByRole("button", {
      name: /Invoice/i
    });
    await expect(invoiceHeader).toBeInTheDocument();
    await userEvent.click(invoiceHeader);

    // 정렬 표시(↑) 확인
    await expect(invoiceHeader).toHaveTextContent("↑");

    // 첫 번째 행이 INV001인지 확인 (오름차순)
    const cells = canvas.getAllByRole("cell");
    await expect(cells[0]).toHaveTextContent("INV001");

    // 다시 클릭하여 내림차순 정렬
    await userEvent.click(invoiceHeader);
    await expect(invoiceHeader).toHaveTextContent("↓");

    // 첫 번째 행이 INV007인지 확인 (내림차순)
    const cellsDesc = canvas.getAllByRole("cell");
    await expect(cellsDesc[0]).toHaveTextContent("INV007");

    // Amount 컬럼으로 정렬
    const amountHeader = canvas.getByRole("button", {
      name: /Amount/i
    });
    await userEvent.click(amountHeader);

    // Amount로 정렬 표시 확인
    await expect(amountHeader).toHaveTextContent("↑");

    // 첫 번째 행이 $150.00인지 확인 (가장 작은 금액)
    const amountCells = canvas.getAllByRole("cell");
    const firstAmountCell = amountCells.find((cell: HTMLElement) => cell.textContent?.includes("$"));
    await expect(firstAmountCell).toHaveTextContent("$150.00");
  }
}`,...d.parameters?.docs?.source},description:{story:"테이블 정렬 기능을 테스트합니다.",...d.parameters?.docs?.description}}};const B=["TableDemo","Default","ShouldSortTableByColumn"];export{u as Default,d as ShouldSortTableByColumn,f as TableDemo,B as __namedExportsOrder,R as default};
