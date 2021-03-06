PGDMP                 
        y            prod #   12.5 (Ubuntu 12.5-0ubuntu0.20.04.1) #   12.5 (Ubuntu 12.5-0ubuntu0.20.04.1) "    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16386    prod    DATABASE     v   CREATE DATABASE prod WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE prod;
                postgres    false            �            1259    16397    category    TABLE     f   CREATE TABLE public.category (
    id bigint NOT NULL,
    category character varying(50) NOT NULL
);
    DROP TABLE public.category;
       public         heap    michan    false            �            1259    16395    category_id_seq    SEQUENCE     x   CREATE SEQUENCE public.category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.category_id_seq;
       public          michan    false    205            �           0    0    category_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
          public          michan    false    204            �            1259    16430    history    TABLE     �   CREATE TABLE public.history (
    id bigint NOT NULL,
    chasier character varying(50) NOT NULL,
    amount bigint NOT NULL,
    orders character varying(100) NOT NULL,
    invoice character varying(50)
);
    DROP TABLE public.history;
       public         heap    michan    false            �            1259    16428    history_id_seq    SEQUENCE     w   CREATE SEQUENCE public.history_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.history_id_seq;
       public          michan    false    209            �           0    0    history_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.history_id_seq OWNED BY public.history.id;
          public          michan    false    208            �            1259    16389    product    TABLE     �   CREATE TABLE public.product (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    description character varying(100) NOT NULL,
    price bigint NOT NULL,
    image character varying(150) NOT NULL,
    idcategory bigint NOT NULL
);
    DROP TABLE public.product;
       public         heap    michan    false            �            1259    16387    product_id_seq    SEQUENCE     w   CREATE SEQUENCE public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          michan    false    203            �           0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          michan    false    202            �            1259    16416    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(150) NOT NULL,
    password character varying(150) NOT NULL,
    role character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    michan    false            �            1259    16414    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          michan    false    207            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          michan    false    206            #           2604    16400    category id    DEFAULT     j   ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
 :   ALTER TABLE public.category ALTER COLUMN id DROP DEFAULT;
       public          michan    false    205    204    205            %           2604    16433 
   history id    DEFAULT     h   ALTER TABLE ONLY public.history ALTER COLUMN id SET DEFAULT nextval('public.history_id_seq'::regclass);
 9   ALTER TABLE public.history ALTER COLUMN id DROP DEFAULT;
       public          michan    false    209    208    209            "           2604    16392 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          michan    false    202    203    203            $           2604    16419    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          michan    false    207    206    207            �          0    16397    category 
   TABLE DATA           0   COPY public.category (id, category) FROM stdin;
    public          michan    false    205   !#       �          0    16430    history 
   TABLE DATA           G   COPY public.history (id, chasier, amount, orders, invoice) FROM stdin;
    public          michan    false    209   M#       �          0    16389    product 
   TABLE DATA           R   COPY public.product (id, name, description, price, image, idcategory) FROM stdin;
    public          michan    false    203   $       �          0    16416    users 
   TABLE DATA           :   COPY public.users (id, email, password, role) FROM stdin;
    public          michan    false    207   5&       �           0    0    category_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.category_id_seq', 2, true);
          public          michan    false    204            �           0    0    history_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.history_id_seq', 9, true);
          public          michan    false    208            �           0    0    product_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.product_id_seq', 13, true);
          public          michan    false    202            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 8, true);
          public          michan    false    206            *           2606    16402    category category_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            michan    false    205            .           2606    16435    history history_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.history
    ADD CONSTRAINT history_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.history DROP CONSTRAINT history_pkey;
       public            michan    false    209            (           2606    16394    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            michan    false    203            ,           2606    16421    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            michan    false    207            &           1259    16427    fki_fk_category    INDEX     I   CREATE INDEX fki_fk_category ON public.product USING btree (idcategory);
 #   DROP INDEX public.fki_fk_category;
       public            michan    false    203            /           2606    16422    product fk_category    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT fk_category FOREIGN KEY (idcategory) REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
 =   ALTER TABLE ONLY public.product DROP CONSTRAINT fk_category;
       public          michan    false    205    203    2858            �      x�3�t��O�2�t)�������� 5��      �   �   x���M�@�ϻ�b~��ay��R�"�莸���k`�>7�CD���0��y��X-�5�\;,îj��jZ���z-���Ĕ������s=�`�����;���+أ1����yEvh����31.ˆ���I��"H��V�c��8K���8/�47R��G��W�����e$�`�{n��9����|�      �     x����n�0�k�)�l���ڬӤl��V�M�\0�l�t����؇�q���ss~����d��l�$�'����k8	윛��q(E��}#7Ǩ�cܼ��$�ˑw"�Ӡy0Mʜy��������$!	���)�%�ʈ�|��񈌬{�Et�v���I[䕝nwl����Iu��X��wN�8�\�Ep��2��t��7���5�4�R����k��krhV,qH²4�)ޢV��{���Wh�/h�����?�ζ�d�f�A4���'�4�
]��G'��U������`z���i��`�ӵ�~/�Z�w�N���:W�,��e�b��s{�G�t�O���W����;��d�ukR&��,7
/��,h/ �O�}2㊐�yw�pg=|˟=j������D�-��_D����џ;2Ͻ��l,�#F����m;�$�<�^������tQ�3�EURn��td�f_�H�����NIw�+�W����Y^D��5~�" ءț&�Y_��j�Rhϑ      �   .  x�e̹v�@ @��Úe��.� aQP@���}@������U���R�8�&�0�Ɋ�V��z$�R�y�����[p,3,��fv7��p��r�4ʘ1g�ji@�?��/L/%��V����$��ږs_���J�
��܍6G���C
�lћ9`A2Ϋ��I*�������;3����RD�(^�P��=m�x[�v�� ��)��=	��_���s�M�'Y�G��n ��X�{Oe?AM%׌��n�� S���}{��ş�,��-���l�"IG�� �E��d�7���4��     