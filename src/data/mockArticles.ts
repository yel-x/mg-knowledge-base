import type { CategorySlug, KnowledgeArticle } from "@/types/knowledge";

const definitions: [string, string, string, CategorySlug, KnowledgeArticle["contentType"], string[], string[]][] = [
  ["create-pr", "Create Purchase Requisition (PR)", "A sample process guide for creating a purchase requisition.", "procurement", "Process Guide", ["PR", "procurement", "purchase-requisition"], ["create PR", "request", "Fiori"]],
  ["pr-approval", "PR Approval", "A sample guide for reviewing and approving a purchase requisition.", "procurement", "Process Guide", ["PR", "approval"], ["approve PR", "workflow"]],
  ["find-approved-pr", "Find Approved Purchase Requisition", "A short demo guide for locating approved purchase requisitions.", "procurement", "Quick Guide", ["PR", "approved"], ["approved PR", "find PR"]],
  ["create-po", "Create Purchase Order (PO)", "A sample process guide for creating a purchase order.", "procurement", "Process Guide", ["PO", "procurement"], ["create PO", "buying"]],
  ["po-approval", "PO Approval", "A sample guide for a purchase order approval flow.", "procurement", "Process Guide", ["PO", "approval"], ["approve PO", "workflow"]],
  ["change-po", "Change Purchase Order", "A sample reference for reviewing changes to a purchase order.", "procurement", "Reference", ["PO", "change"], ["edit PO"]],
  ["physical-inventory", "Create Physical Inventory Document", "A sample process guide for a physical inventory document.", "inventory", "Process Guide", ["PID", "physical-inventory"], ["inventory document", "count stock"]],
  ["post-inventory", "Post Physical Inventory", "A demo guide for posting sample physical inventory results.", "inventory", "Process Guide", ["PID", "inventory"], ["post inventory", "stock count"]],
  ["stock-transfer", "Stock Transfer", "A sample reference for a stock transfer scenario.", "inventory", "Process Guide", ["inventory", "stock-transfer"], ["move stock", "transfer"]],
  ["goods-movement", "Goods Movement", "A demo guide covering a goods movement example.", "inventory", "Process Guide", ["inventory", "goods-movement"], ["goods issue", "movement"]],
  ["inventory-troubleshooting", "Physical Inventory Troubleshooting", "Sample checks for a physical inventory issue.", "inventory", "Troubleshooting", ["PID", "inventory", "errors"], ["inventory error", "PID issue"]],
  ["material-extension", "Material Extension to Plant", "A sample guide for extending material data to a plant.", "master-data", "Process Guide", ["material", "master-data", "plant"], ["material extension", "plant"]],
  ["storage-location", "Material Extension to Storage Location", "A demo reference for storage location extension.", "master-data", "Process Guide", ["material", "storage-location"], ["extend material", "storage"]],
  ["profit-center-extension", "Profit Center Extension", "A sample guide for a profit center extension.", "master-data", "Process Guide", ["profit-center", "master-data"], ["profit center", "extend"]],
  ["supplier-master", "Supplier Master", "A demo reference for supplier master data.", "master-data", "Reference", ["supplier", "master-data"], ["vendor", "supplier"]],
  ["check-material", "Check Material Master", "A quick demo guide for checking material information.", "master-data", "Quick Guide", ["material", "check"], ["check material"]],
  ["journal-entry", "Create Journal Entry", "A sample finance guide for a journal entry workflow.", "finance", "Process Guide", ["finance", "journal-entry"], ["FI", "accounting"]],
  ["accounting-document", "Find Accounting Document", "A demo reference for finding an accounting document.", "finance", "Reference", ["finance", "document"], ["FI document", "accounting"]],
  ["reverse-document", "Reverse Accounting Document", "A sample guide for a document reversal scenario.", "finance", "Process Guide", ["finance", "reversal"], ["reverse document", "FI"]],
  ["pid-missing", "PID - Item Not Appearing", "Sample troubleshooting content for an item missing from a physical inventory document.", "troubleshooting", "Troubleshooting", ["PID", "inventory", "error"], ["item missing", "physical inventory"]],
  ["material-not-found", "Material Not Found", "Sample troubleshooting content for a material lookup issue.", "troubleshooting", "Troubleshooting", ["material", "master-data", "error"], ["material error", "not found"]],
  ["authorization-error", "Authorization Error", "Sample troubleshooting content for an authorization message.", "troubleshooting", "Troubleshooting", ["authorization", "security"], ["access", "permission"]],
  ["profit-center-missing", "Profit Center Missing", "Sample troubleshooting content for missing profit center data.", "troubleshooting", "Troubleshooting", ["profit-center", "master-data"], ["profit center error"]],
  ["supplier-not-available", "Supplier Not Available", "Sample troubleshooting content for supplier lookup issues.", "troubleshooting", "Troubleshooting", ["supplier", "master-data"], ["supplier error"]],
  ["uom-error", "Unit of Measure Error", "Sample troubleshooting content for a unit of measure message.", "troubleshooting", "Troubleshooting", ["UOM", "material", "error"], ["unit of measure"]],
  ["check-supplier", "Check Supplier", "A short demo guide for checking supplier information.", "quick-guides", "Quick Guide", ["supplier", "quick-guide"], ["check supplier"]],
  ["check-profit-center", "Check Profit Center", "A short demo guide for checking a profit center.", "quick-guides", "Quick Guide", ["profit-center", "quick-guide"], ["check profit center"]],
  ["check-po", "Check PO", "A short demo guide for checking a purchase order.", "quick-guides", "Quick Guide", ["PO", "quick-guide"], ["check PO"]],
  ["find-pid", "Find PID", "A short demo guide for finding a physical inventory document.", "quick-guides", "Quick Guide", ["PID", "quick-guide"], ["find PID"]],
  ["find-approved-pr-guide", "Find Approved PR", "A short demo guide for locating an approved PR.", "quick-guides", "Quick Guide", ["PR", "approval", "quick-guide"], ["approved PR"]],
  ["check-material-guide", "Check Material", "A short demo guide for checking material data.", "quick-guides", "Quick Guide", ["material", "quick-guide"], ["check material"]],
];

const related: Record<string, string[]> = {
  "create-pr": ["pr-approval", "find-approved-pr", "create-po"], "pr-approval": ["create-pr", "find-approved-pr"], "find-approved-pr": ["create-pr", "pr-approval", "create-po"], "create-po": ["create-pr", "po-approval"], "po-approval": ["create-po"],
  "physical-inventory": ["post-inventory", "pid-missing"], "post-inventory": ["physical-inventory", "pid-missing"], "material-extension": ["check-material", "profit-center-extension"], "profit-center-extension": ["check-profit-center", "material-extension"], "pid-missing": ["physical-inventory", "post-inventory"], "material-not-found": ["material-extension", "check-material"], "check-supplier": ["supplier-master"], "check-profit-center": ["profit-center-extension"], "check-po": ["create-po"], "find-pid": ["physical-inventory"], "find-approved-pr-guide": ["find-approved-pr"], "check-material-guide": ["check-material"],
};

export const mockArticles: KnowledgeArticle[] = definitions.map(([id, title, description, category, contentType, tags, keywords]) => ({
  id, title, slug: id, description, category, contentType, status: "DEMO CONTENT", lastUpdated: "September 21, 2026", tags, keywords,
  purpose: "Demonstration content showing how a Mary Grace knowledge article could be structured. Verify actual SAP procedures before production use.",
  prerequisites: ["This is sample content for the UI prototype.", "Verify actual SAP access and process requirements before production use."],
  steps: ["Open the relevant SAP application.", "Enter the required information.", "Review the sample values.", "Complete the demonstration flow."].map((step, index) => ({ title: `Step ${index + 1}`, description: step })),
  commonErrors: [{ title: "Sample validation message", description: "Demo troubleshooting content. No production resolution is implied." }], relatedArticleIds: related[id] ?? [],
}));

export function getArticleBySlug(slug: string) { return mockArticles.find((item) => item.slug === slug); }
export function getArticlesByCategory(category: CategorySlug) { return mockArticles.filter((item) => item.category === category); }
export const recentlyAdded = mockArticles.slice(0, 6);
export const frequentlyUsed = ["create-pr", "create-po", "find-approved-pr-guide", "check-material-guide", "check-profit-center"].map((id) => mockArticles.find((article) => article.id === id)).filter((article): article is KnowledgeArticle => Boolean(article));
