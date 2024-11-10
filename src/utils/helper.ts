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

  static arrayMove<T>(array: T[], from: number, to: number) {
    const newArray = array.slice();
    newArray.splice(
      to < 0 ? newArray.length + to : to,
      0,
      newArray.splice(from, 1)[0],
    );
    return newArray;
  }
}

export default BaseHelper;
