
-- INSERT TONY STARK INFO INTO CLIENT TABLE
INSERT INTO public.client(
    client_firstname,
    client_lastname,
    client_email,
    client_password
) VALUES (
    'Tony', 
    'Stark', 
    'tony@starkent.com', 
    'Iam1ronM@n'
);


-- CHANGE TONY'S client_type to Admin
UPDATE public.client 
SET client_type = 'Admin'
WHERE client_id = 1;

-- DELETE TONY FROM THE CLIENT TABLE
DELETE FROM public.client WHERE client_firstname = 'Tony';

-- UPDATE GM DESCRIPTION TO SAY A HUGE INTERIOR 
UPDATE public.inventory
Set inv_description = REPLACE (
    inv_description, 
    'small interiors', 
    'a huge interior' 
    )
WHERE inv_id = 10;

-- SELECT SPORT CLASSIFIED CARS
SELECT
    inv_make,
    inv_model,
    classification_name
FROM
    public.inventory
INNER JOIN public.classification
    ON classification.classification_id = inventory.classification_id
WHERE inventory.classification_id = 2;

-- REPLACE IMAGE FILE PATH
UPDATE public.inventory
SET 
    inv_image = REPLACE(inv_image, '/images', '/images/vehicles'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles');