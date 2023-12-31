import { reFetchingType } from "../../pages/MyPage";
import { authInstance } from "../common/axiosApi";

//임대요청 수락
export const fetchAcceptData = async (leaseId: number) => {
  try {
    await authInstance.put(`/api/agents/offices/lease-requests/${leaseId}/accept`);
    alert("임대요청이 수락되었습니다.");
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    alert("수락이 완료되지 않았습니다.");
    throw error;
  }
};

//임대요청 거절
export const fetchRejectData = async (leaseId: number) => {
  try {
    await authInstance.put(`/api/agents/offices/lease-requests/${leaseId}/reject`);
    alert("임대요청이 거절되었습니다.");
  } catch (error) {
    console.error("API 호출 중 에러 발생:", error);
    alert("거절이 완료되지 않았습니다.");
    throw error;
  }
};

export const fetchAgentEditName = (event: React.FormEvent<HTMLFormElement>, refetch: reFetchingType) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  const input = target.children[0] as unknown as HTMLInputElement;
  const response = authInstance
    .put("api/agents/info/username", {
      newName: input.value,
    })
    .then(res => {
      refetch();
      return res.data;
    });
  return response;
};
