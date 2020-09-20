export default (type) =>
  (payload = null, meta = null) =>
    ({
      type,
      payload,
      meta,
    });
