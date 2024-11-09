export const InvoiceController = async (req, res) => {
    try {
      return res.json({ status: "success", "Message": "Success Data"});
    } catch (e) {
      return res.json({ status: "fail", "Message": e.toString() });
    }
  };