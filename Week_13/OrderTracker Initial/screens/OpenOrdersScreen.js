import { useContext, useState, useEffect, useLayoutEffect } from "react";
import OrdersOutput from "../components/OrdersOutput/OrdersOutput";
import { OrdersContext } from "../store/orders-context";
import { fetchOrders } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function OpenOrdersScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const ordersCtx = useContext(OrdersContext);

  useEffect(() => {
    async function getOrders() {
      setIsLoading(true);
      try {
        const orders = await fetchOrders();
        ordersCtx.setOrders(orders);
      } catch (error) {
        setError("Could not fetch orders!");
      }
      setIsLoading(false);
    }

    getOrders();
  }, []);

  const openOrders = ordersCtx.orders.filter((order) => {
    return order.status === "Open";
  });

  function errorHandler() {
    setError(null);
  }

  if (isLoading) {
    return <LoadingOverlay />;
  } else if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  } else {
    return (
      <OrdersOutput
        summaryName="Open Orders Total"
        orders={openOrders}
        noOrdersText="No Open Orders Yet"
      />
    );
  }
}

export default OpenOrdersScreen;
