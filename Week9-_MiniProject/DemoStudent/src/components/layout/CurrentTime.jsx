import React from "react";
import Button from "../ui/Button";

import { useGetCurrentUTCTimeQuery } from "../../api/timeAPI";
import { useSaveDateTimeMutation } from "../../api/saveDateTimeAPI";

export default function CurrentTime() {
  const { data, error, refetch } = useGetCurrentUTCTimeQuery();
  const [saveDateTime, { isLoading: isSaving, isSuccess, reset }] =
    useSaveDateTimeMutation();

  const dateTime = data?.datetime || "";

  const handleSave = () => {
    saveDateTime(dateTime);
  };

  return (
    <>
      <span>{error ? "Error fetching time" : dateTime}</span>
      <Button variant="secondary" onClick={refetch}>
        Refresh
      </Button>
      <Button onClick={handleSave}>{isSaving ? "Saving..." : "Save"}</Button>

      {isSuccess && (
        <dialog open>
          <p>Current time saved successfully!</p>
          <Button onClick={reset}>Close</Button>
        </dialog>
      )}
    </>
  );
}
