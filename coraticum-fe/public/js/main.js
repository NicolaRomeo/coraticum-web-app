var PUBLISHABLE_KEY ="pk_test_51Lc7LSFNhDR4ffVKJUTA5kh5lrd0A6cu34W7jNE2yilPGsFakZNIg0XxM9hougIzhGswdZWRvmQtz5F8BSIzndSn00BY2msd79";

var DOMAIN = location.href.replace(/[^/]*$/, "");

var stripe = Stripe(PUBLISHABLE_KEY);

var handleResult = function (result) {
  if (result.error) {
    console.log(result.error.message);
  }
};

$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("success")) {
    var success = urlParams.get("success") == "true";
    if (success) {
      $("#payment").hide();
      $("#status").text(
        "Thank you for purchasing Biller! Your order will arrive within the hour."
      );
    } else {
      $("#status").text(
        "There was an error processing your payment. Please try again."
      );
    }
  }

  $("#order-btn").click(function (event) {
    var checkoutMode = $(event.target).data("checkoutMode");
    var priceId = $(event.target).data("priceId");
    var items = [{ price: priceId, quantity: 1 }];

    stripe
      .redirectToCheckout({
        mode: checkoutMode,
        lineItems: items,
        successUrl: DOMAIN + "index.html?success=true",
        cancelUrl: DOMAIN + "index.html?success=false",
      })
      .then(handleResult);
  });
});