import { Button } from "@/components/Button";

export const ArticlesSearch = ({ onSubmitSearch, handleReset }) => {
  return (
    <section className="input-group mb-3" style={{ marginBottom: "20px" }}>
      <form onSubmit={onSubmitSearch}>
        <input
          name="search"
          type="text"
          className="form-control"
          placeholder="Type to search..."
        />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </form>
    </section>
  );
};
