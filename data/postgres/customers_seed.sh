psql -U 'yingguo' -d 'reviews' -c "COPY customers (customer_name, photo_url) FROM '/Users/yingguo/gitroot/system-design/reviews-service/data/customers.csv' DELIMITER ',' CSV HEADER";