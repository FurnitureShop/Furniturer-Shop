export default function checkStatusIndex(status) {
  switch (status) {
    case "Create order":
      return 0;
    case "Confirm payment method":
      return 1;
    case "Accepted":
    case "Cancelled":
    case "Processing":
      return 2;
    case "Deliverd":
      return 3;
    default:
      return 0;
  }
}
