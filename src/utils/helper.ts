class BaseHelper {
  static currencyFormatter(amount: number | undefined) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    if (typeof amount === "undefined") {
      return;
    }

    return formatter.format(amount);
  }

  static formatNumber(amount: number) {
    return new Intl.NumberFormat("en-US").format(amount);
  }
}

export default BaseHelper;
