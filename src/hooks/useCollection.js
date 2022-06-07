import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/cart/cartSlice";

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setIsPending(true);

    let ref = collection(db, collectionName);
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        if (snapshot.empty) {
          setError("Empty collection");
          setIsPending(false);
          setDocuments(null);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          dispatch(getProducts(results));
          setDocuments(results);
          setIsPending(false);
          setError(null);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [collectionName, dispatch]);

  return { documents, isPending, error };
};
