export const SQL_DEMO_TEXT = `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger','4006','Norway');
`

export const SQL_INTRUDER_TEXT = `"SELECT\n" +
                "     trs.payment_method,\n" +
                "     SUM( (\n" +
                "         SELECT\n" +
                "             pyt.amount\n" +
                "         FROM\n" +
                "             ci_pyt_transactions pyt\n" +
                "         WHERE\n" +
                "             pyt.id = trs.pyt_trs_id\n" +
                "             AND pyt.status IN(\n" +
                "                 2,3\n" +
                "             )\n" +
                "             AND (OPERATOR('Trunc', trs.payment_date) >= OPERATOR('Trunc', ?1)\n" +
                "                   AND OPERATOR('Trunc', trs.payment_date) <= OPERATOR('Trunc', ?2) )\n" +
                "     ) ) total_paid_within_filtered_date,\n" +
                "     SUM( (\n" +
                "         SELECT\n" +
                "             pyt.amount\n" +
                "         FROM\n" +
                "             ci_pyt_transactions pyt\n" +
                "         WHERE\n" +
                "             pyt.id = trs.pyt_trs_id\n" +
                "             AND trs.status = 15\n" +
                "             AND pyt.status = 4\n" +
                "             AND (OPERATOR('Trunc', trs.payment_date) >= OPERATOR('Trunc', ?3)\n" +
                "                   AND OPERATOR('Trunc', trs.payment_date) <= OPERATOR('Trunc', ?4) )\n" +
                "     ) ) total_cancelled_and_paid_within_filtered_date,\n" +
                "     SUM( (\n" +
                "         SELECT\n" +
                "             pyt.amount\n" +
                "         FROM\n" +
                "             ci_pyt_transactions pyt\n" +
                "         WHERE\n" +
                "             pyt.id = trs.pyt_trs_id\n" +
                "             AND trs.status = 15\n" +
                "             AND(pyt.status = 4\n" +
                "                   AND OPERATOR('Trunc', pyt.update_date) BETWEEN OPERATOR('Trunc', ?5) AND OPERATOR('Trunc', ?6) )\n" +
                "             AND OPERATOR('Trunc', trs.payment_date) < OPERATOR('Trunc', ?7)\n" +
                "     ) ) total_cancelled_and_paid_before_from_date\n" +
                " FROM\n" +
                "     ci_trs_transactions trs,\n" +
                "     ci_vtp_test_centers vtc\n" +
                " WHERE\n" +
                "     trs.vtc_id = vtc.id\n" +
                "     AND trs.payment_method IS NOT NULL\n" +
                "     AND vtc.id = NVL(?8, vtc.id)\n" +
                "     AND vtc.vtp_id = NVL(?9, vtc.vtp_id)\n" +
                " GROUP BY\n" +
                "     trs.payment_method ";
`

export const JSON_DEMO_TEXT = {
  "id": "0001",
  "type": "donut",
  "name": "Cake",
  "ppu": 0.55, "batters": {
    "batter": [{
      "id": "1001", "type": "Regular", "batxter": [
        {
          "id": "1001", "type": "Regular", "batxter": [
            {
              "id": "1001", "type": "Regular", "batxter": [
                { "id": "1001", "type": "Regular" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }]
            },
            { "id": "1002", "type": "Chocolate" },
            { "id": "1003", "type": "Blueberry" },
            { "id": "1004", "type": "Devil's Food" }]
        },
        { "id": "1002", "type": "Chocolate" },
        { "id": "1003", "type": "Blueberry" },
        { "id": "1004", "type": "Devil's Food" }]
    },
    { "id": "1002", "type": "Chocolate" },
    { "id": "1003", "type": "Blueberry" },
    { "id": "1004", "type": "Devil's Food" }
    ]
  },
  "topping":
    [
      {"id": "5001", "type": "None"},
      {"id": "5002", "type": "Glazed"},
      {"id": "5005", "type": "Sugar"},
      {"id": "5007", "type": "Powdered Sugar"},
      {"id": "5006", "type": "Chocolate with Sprinkles"},
      {"id": "5003", "type": "Chocolate"},
      {"id": "5004", "type": "Maple"}
    ]
  }

;


export const JSON_DEMO_TEXT_STRING = `
  [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              {"id": "1001", "type": "Regular"},
              {"id": "1002", "type": "Chocolate"},
              {"id": "1003", "type": "Blueberry"},
              {"id": "1004", "type": "Devil's Food"}
            ]
        },
      "topping":
        [
          {"id": "5001", "type": "None"},
          {"id": "5002", "type": "Glazed"},
          {"id": "5005", "type": "Sugar"},
          {"id": "5007", "type": "Powdered Sugar"},
          {"id": "5006", "type": "Chocolate with Sprinkles"},
          {"id": "5003", "type": "Chocolate"},
          {"id": "5004", "type": "Maple"}
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              {"id": "1001", "type": "Regular"}
            ]
        },
      "topping":
        [
          {"id": "5001", "type": "None"},
          {"id": "5002", "type": "Glazed"},
          {"id": "5005", "type": "Sugar"},
          {"id": "5003", "type": "Chocolate"},
          {"id": "5004", "type": "Maple"}
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              {"id": "1001", "type": "Regular"},
              {"id": "1002", "type": "Chocolate"}
            ]
        },
      "topping":
        [
          {"id": "5001", "type": "None"},
          {"id": "5002", "type": "Glazed"},
          {"id": "5003", "type": "Chocolate"},
          {"id": "5004", "type": "Maple"}
        ]
    }
  ]
  `

export const ENUM_DEMO_CLASS = `public static enum PaymentMethodType {
    CASH(new BigDecimal(1)),
    CREDIT_CARD(new BigDecimal(2)),
    VTP_CREDIT_ACCOUNT(new BigDecimal(3)),
    POST_PAID(new BigDecimal(5)),
    E_WALLET(new BigDecimal(9)),
    POS(new BigDecimal(6));

    public static final String DOMAIN_CODE = "TRS_PAYMENT_METHOD";

    private BigDecimal value;

    private PaymentMethodType(BigDecimal value) {
        this.value = value;
    }

    public BigDecimal getValue() {
        return value;
    }
}
`
