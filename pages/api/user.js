import firebase from "../../lib/firebase";

export default async (req, res) => {
  try {
    const document = await firebase
      .collection("users")
      .doc(req.query.doc)
      .get();
    return res.send(document.data());
  } catch (error) {
    res.status(500).send({ error });
  }
};
