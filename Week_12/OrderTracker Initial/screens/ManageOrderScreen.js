import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, Switch, View, Text } from "react-native";
import Button from "../components/UI/Button";
import { OrdersContext } from "../store/orders-context";
import OrderForm from "../components/ManagedOrder/OrderForm";

function ManageOrderScreen(props) {
  const ordersCtx = useContext(OrdersContext);

  const editedOrderId = props.route.params?.orderId; // ? Checks for undefined first
  const isEditing = !!editedOrderId; // Converts false-like value to false and true-like value to true

  const selectedOrder = ordersCtx.orders.find(
    (order) => order.id === editedOrderId
  );

  const [orderCompleted, setOrderCompleted] = useState(
    isEditing ? (selectedOrder.status === "Open" ? false : true) : false
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: isEditing ? "Edit Order" : "Add Order",
    });
  }, [props.navigation, isEditing]);

  function deleteOrderHandler() {
    ordersCtx.deleteOrder(editedOrderId);
    props.navigation.goBack();
  }

  function cancelHandler() {
    props.navigation.goBack();
  }

  function confirmHandler(orderData) {
    if (isEditing) {
      ordersCtx.updateOrder(editedOrderId, {
        ...orderData,
        status: orderCompleted ? "Completed" : "Open",
      });
    } else {
      ordersCtx.addOrder(orderData);
    }
    props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <OrderForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedOrder}
      />
      {isEditing && (
        <View style={styles.rowContainer}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusLabel}>Order Status</Text>
            <Switch
              onValueChange={setOrderCompleted.bind(!orderCompleted)}
              value={orderCompleted}
              thumbColor={
                orderCompleted
                  ? GlobalStyles.colors.accent500
                  : GlobalStyles.colors.gray500
              }
              trackColor={{
                false: GlobalStyles.colors.gray700,
                true: GlobalStyles.colors.error500,
              }}
            />
          </View>
          <View style={styles.deleteContainer}>
            <IconButton
              icon="delete"
              color={GlobalStyles.colors.error500}
              size={30}
              onPress={deleteOrderHandler}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default ManageOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: GlobalStyles.colors.primary200,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 200,
  },
  statusLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary100,
  },
});
